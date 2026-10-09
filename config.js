// 聊天室設定檔：只需要填一次。
// 從 V1.3 起，設定都放在這個檔案；以後升級只要替換 index.html，不必再改設定。
// （這裡的 Publishable key 本來就設計成可公開，不用擔心；但「secret key」絕對不要貼進來）
window.CHAT_CONFIG = {
  // Supabase 的 Project URL：只要到 .supabase.co 為止，後面不要加 / 或 /rest/v1
  SUPABASE_URL: "https://sumbrbigoixdyaqqayll.supabase.co",

  // Supabase 的 Publishable key（以 sb_publishable_ 開頭；舊版叫 anon key，也可以）
  SUPABASE_KEY: "sb_publishable_DTg89c32RlO8q1V0ukmJog__dGzTQrV",

  // 選填：正式上線搬到新網址後，把新網址填在這裡（例如 "https://my-chat.pages.dev/"）
  // 填了以後，「複製邀請連結」就會用新網址。目前沒搬家就留空。
  SHARE_BASE: ""
};
