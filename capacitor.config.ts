import type { CapacitorConfig } from "@capacitor/cli";
const config: CapacitorConfig = {
  appId: "com.yourname.briefhelfer",
  appName: "BriefHelfer",
  webDir: "public",
  server: { url: process.env.APP_URL }, // loads your deployed web app inside the iOS shell
};
export default config;
