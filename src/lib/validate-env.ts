import { validateServerEnv } from "@/config/env.server";

export default function checkRequiredEnvVars() {
  const { valid, missing } = validateServerEnv();

  if (!valid) {
    console.warn(
      `Missing required environment variables: ${missing.join(", ")}`
    );
    // En desarrollo, solo imprimir una warning
    if (process.env.NODE_ENV === "production") {
      throw new Error(
        `Faltan variables de entorno requeridas: ${missing.join(", ")}`
      );
    }
  }
}
