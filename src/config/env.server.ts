export const serverConfig = {
  articlesUrl:
    process.env.ARTICLES_URL ||
    "https://jrt2bb3b2nlkw5ozvfcld62wbe0pnifh.lambda-url.us-east-1.on.aws/",
};

export function validateServerEnv(): { valid: boolean; missing: string[] } {
  const requiredVars = ["ARTICLES_URL"];
  const missing = requiredVars.filter((name) => !process.env[name]);
  return {
    valid: missing.length === 0,
    missing,
  };
}
