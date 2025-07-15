export default {
  async fetch(request) {
    if (request.method === "POST") {
      const { ip, question } = await request.json();
      const BOT_TOKEN = "7782525818:AAFPehgRy09k_ZH2sD-kuuAe4Xm_Oi8Myuo";
      const CHAT_ID = "7782525818";

      const text = `🆕 নতুন প্রশ্ন প্রাপ্ত:\n\n🌐 ইউজারের IP: ${ip}\n💬 প্রশ্ন: ${question}`;

      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text })
      });

      return new Response(JSON.stringify({ status: "ok" }), {
        headers: { "Content-Type": "application/json" }
      });
    }
    return new Response("Only POST allowed", { status: 405 });
  }
};
