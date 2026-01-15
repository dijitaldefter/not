import http.server
import socketserver

PORT = 8000
Handler = http.server.SimpleHTTPRequestHandler

# Allow reuse of the port
socketserver.TCPServer.allow_reuse_address = True

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Sunucu http://localhost:{PORT} adresinde calisiyor")
    print("Durdurmak icin Ctrl+C basin.")
    httpd.serve_forever()
