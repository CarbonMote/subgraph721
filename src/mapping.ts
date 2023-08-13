import { Token } from "./generated/schema";

export function handleNewToken(event: any): void {
	let token = new Token(event.params.tokenId.toString());
	token.tokenId = event.params.tokenId;
	token.tokenURI = event.params.tokenURI;
	token.save();
}
