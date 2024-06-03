import RequestState from "../../../../core/data/enum/request_state.enum";
import { Collection } from "../../data/model/collection.type";

interface HomeState {
  requestState: RequestState;
  onSaleCollection?: Collection | null;
  fetch: () => Promise<void>;
}

export default HomeState;
