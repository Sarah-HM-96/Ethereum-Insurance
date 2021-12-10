import EthereumInsurance from './contracts/EthereumInsurance.json';
import PurchasePolicy from './contracts/PurchasePolicy.json';
import CreateNewPolicy from './contracts/CreateNewPolicy.json';

const options = {
  contracts: [EthereumInsurance, PurchasePolicy, CreateNewPolicy],
};

export default options;