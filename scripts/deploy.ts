import { ethers } from 'hardhat';
import { makeAbi } from './abiGenerator';

async function main() {
  const contractName = 'MyNFT';
  const name = 'CoJinNam'; // Todo: NFT의 이름
  const symbol = 'CJN'; // Todo: NFT의 Symbol

  if (!name || !symbol) {
    throw new Error('Todo: (scripts/deploy.ts) name or symbol is empty');
  }

  console.log(`Deploying contracts`);

  const MyNFT = await ethers.getContractFactory("MyNFT");
  const myNFT = await MyNFT.deploy(); // 생성자 인자 전달

  await myNFT.waitForDeployment();

  console.log(`Contract deployed at: ${myNFT.target}`);
  await makeAbi(`${contractName}`, myNFT.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
