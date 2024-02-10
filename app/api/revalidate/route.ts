export default async function handler(req: any, res: any) {
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }
  try {
    await res.revalidate("/painel-das-vendas");
    return res.json({ revalidated: true });
  } catch (error) {
    return res.status(500).json({ message: "Error revalidating" });
  }
}
