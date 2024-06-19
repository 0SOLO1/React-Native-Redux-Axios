import { dummyApi } from "./url";
import { apiGet, apiPost } from "./utils";

export function getApiDummyData() {
    return apiGet(dummyApi, {});
  }