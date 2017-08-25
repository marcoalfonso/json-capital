import Contract from 'truffle-contract';
import MetaCoinArtifact from '../build/contracts/MetaCoin.json';
import { provider } from './web3';
const MetaCoin = Contract(MetaCoinArtifact);
MetaCoin.setProvider(provider);
export default MetaCoin.deployed();
