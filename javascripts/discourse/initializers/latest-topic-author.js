import { apiInitializer } from "discourse/lib/api";
import LatestTopicAuthor from "../components/";

export default apiInitializer("1.14.0", (api) => {
  api.renderInOutlet("above-discovery-categories", LatestTopicAuthor);
});
