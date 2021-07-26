import { NextApiRequest, NextApiResponse } from "next";

export default function Webhooks(request: NextApiRequest, response: NextApiResponse) {
  console.log('evento recebido');

  response.status(200).json({ ok: true });
}