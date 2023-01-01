import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

function handler(_req: Request): Response {
  return new Response("Hello, The World!!!");
}

console.log("Listening on http://localhost:8000");
serve(handler);
