import http.server
import socketserver
import json
import urllib.parse
import os

PORT = int(os.environ.get("PORT", 8090))
DIRECTORY = "."

class StharaHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        parsed_url = urllib.parse.urlparse(self.path)
        
        # API Search Endpoint
        if parsed_url.path == '/api/search':
            self.handle_api_search(parsed_url.query)
        else:
            # Fallback to static file handling
            super().do_GET()

    def handle_api_search(self, query_string):
        params = urllib.parse.parse_qs(query_string)
        location_query = params.get('location', [''])[0].lower().strip()
        type_query = params.get('type', [''])[0].lower().strip()

        # Load properties from JSON
        try:
            with open('data/properties.json', 'r', encoding='utf-8') as f:
                properties = json.load(f)
        except Exception as e:
            self.send_error(500, f"Error loading data: {str(e)}")
            return

        # Filtering Logic
        filtered = []
        location_words = location_query.split()
        
        for p in properties:
            # Multi-word location match
            match_location = True
            if location_query:
                for word in location_words:
                    # Robust matching for Bangalore/Banglore and other variations
                    city_match = word in p['city'].lower() or (word == 'banglore' and p['city'].lower() == 'bangalore')
                    if not (word in p['location'].lower() or city_match):
                        match_location = False
                        break
            
            # Type match
            match_type = not type_query or p['type'].lower() == type_query

            if match_location and match_type:
                filtered.append(p)

        # Response
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(json.dumps(filtered).encode('utf-8'))

if __name__ == "__main__":
    # Ensure working directory is correct
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    with socketserver.TCPServer(("", PORT), StharaHandler) as httpd:
        print(f"🚀 Sthara Backend running at http://localhost:{PORT}")
        httpd.serve_forever()
