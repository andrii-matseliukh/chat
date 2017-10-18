using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace test_chat_signalR.Chat
{
    public enum RoomName
    {
        Family,
        Friend
    }

    public class UserProfile
    {
        public string ConnectionId { get; set; }
        public string Name { get; set; }
        public RoomName Room { get; set; }
    }
}