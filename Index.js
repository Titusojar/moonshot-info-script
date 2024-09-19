import { ethers } from "ethers";

// Replace with your own node URL
const RPC_URL = "http://localhost:8545"; // Assuming you're running your own Ethereum node

// Contract address and ABI (replace with correct Moonshot contract)
const CONTRACT_ADDRESS = "0xYourContractAddressHere";
const ABI = [ /* Replace with relevant ABI */ ];

// Initialize provider
const provider = new ethers.providers.JsonRpcProvider(RPC_URL);

// Initialize contract instance
const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);

async function getTVL() {
    try {
        // Example: Getting the balance of the contract, assuming this represents TVL.
        const tvl = await contract.getBalance(); // Modify this if TVL is derived in a different way
        console.log("Total Value Locked:", ethers.utils.formatEther(tvl), "ETH");
        return tvl;
    } catch (error) {
        console.error("Error fetching TVL:", error);
    }
}

async function getMigrationPercentage() {
    try {
        // Example: Assuming the contract has a method to get the migration percentage
        const migrationPercentage = await contract.migrationProgress(); // Replace with actual method
        console.log("Migration Percentage:", migrationPercentage.toString(), "%");
        return migrationPercentage;
    } catch (error) {
        console.error("Error fetching migration percentage:", error);
    }
}

async function main() {
    await getTVL();
    await getMigrationPercentage();
}

main().catch(console.error);

