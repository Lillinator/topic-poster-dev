import { apiInitializer } from "discourse/lib/api";
import LatestTopicAuthor from "../components/latest-topic-author";

export default apiInitializer("1.14.0", (api) => {
  api.renderInOutlet("above-latest-topic-list-item", LatestTopicAuthor);
});
