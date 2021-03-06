import type { APIRequest } from 'aleph/types.ts';

export default function handler(req: APIRequest) {
  const { deno, v8, typescript } = Deno.version;
  const decoder = new TextDecoder('utf-8');
  const data = Deno.readFileSync(
    '../metadata/latestBuildSucceed',
  );
  const app = decoder.decode(data);

  req.status(200).json({
    deno,
    typescript,
    v8,
    app,
  });
}
