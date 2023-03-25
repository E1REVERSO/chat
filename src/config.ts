import * as dotenv from "dotenv";
dotenv.config();
import { IConfig } from "./interface";
dotenv.config();

export const config: IConfig = {
  openai_api_key: process.env.OPENAI_API_KEY || "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",
  model: process.env.MODEL || "gpt-3.5-turbo",
  chatPrivateTiggerKeyword: process.env.CHAT_PRIVATE_TRIGGER_KEYWORD || "",
  chatTiggerRule: process.env.CHAT_TRIGGER_RULE || "",
  disableGroupMessage: process.env.DISABLE_GROUP_MESSAGE === "true",
};
