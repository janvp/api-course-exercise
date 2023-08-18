This is an exercise for an API course. Products and images in a webshop can be managed by API calls. The API server used for this exercise is [JSON Server Auth](https://www.npmjs.com/package/json-server-auth), which must be installed separately.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Install JSON Server and JSON Server Auth:

```bash
npm install -g json-server json-server-auth
```

Start the JSON server:
```bash
json-server-auth db.json -p 3001 -r routes.json (--host 192.168.0.xxx)
```

API calls can be done on http://localhost:3001 or http://192.168.0.xxx:3001 if you add the host parameter (see swagger folder for API specifications).