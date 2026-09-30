# BriefHelfer: setup

1. `npm install`, copy `.env.example` to `.env.local`, fill it in.
2. Supabase (choose an EU region): run `supabase/schema.sql` in the SQL editor. Auth > URL config: add your site URL.
3. `npm run dev`, then test the web flow with an anonymised letter.
4. Deploy to Vercel, add the same env vars. The daily reminder cron is in `vercel.json`.

## Telegram
Create a bot with @BotFather, then:
curl "https://api.telegram.org/bot<TOKEN>/setWebhook?url=<APP_URL>/api/telegram&secret_token=<TELEGRAM_SECRET>"

## WhatsApp (Meta Cloud API)
developers.facebook.com > create Business app > add WhatsApp. Webhook URL `<APP_URL>/api/whatsapp`,
verify token = WHATSAPP_VERIFY_TOKEN, subscribe to `messages`. Use a permanent system-user token.
Replies inside 24h of the user's message are free-form; reminders outside it need approved templates.

## iOS (needs a Mac, Xcode, Apple Developer account)
npm i @capacitor/core @capacitor/cli @capacitor/ios @capacitor/camera @capacitor/push-notifications
npx cap add ios && npx cap open ios
Apple can reject thin website wrappers: add native camera, push notifications and a share extension.
Check Apple's current rules on selling subscriptions inside the app (in-app purchase vs. external payment).
