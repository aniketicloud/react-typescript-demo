import { setupWorker } from "msw";
import { handlers } from "./handlers";

// this configures a Service worker with the given request handlers
export const worker = setupWorker(...handlers);
