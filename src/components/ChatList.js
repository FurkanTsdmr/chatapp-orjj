import styles from "./styles.module.css";
import { useChat } from "../context/ChatContext";
import ChatItem from "./ChatItem";
import chatlist from "./chatliststyle.css"

import ScrollableFeed from 'react-scrollable-feed'

function ChatList() {
	const { messages } = useChat();


	return (

		<div className={styles.chatlist} style={{backgroundColor:"gray"}}>
			<ScrollableFeed forceScroll={true}>
				{messages.map((item, key) => (
					<ChatItem key={key} item={item} />
				))}

			</ScrollableFeed>
		</div>
	);
}

export default ChatList;