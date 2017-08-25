import Contract from 'truffle-contract';
import JSNArtifact from '../build/contracts/JSNToken.json';
import { provider } from './web3';
const JSN = Contract(JSNArtifact);
JSN.setProvider(provider);
export default JSN.deployed();
