using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using System.Threading.Tasks;

namespace test_chat_signalR.Chat
{
    public class ChatHub : Hub
    {
        public static HashSet<UserProfile> ActiveUsers = new HashSet<UserProfile>();

        public void HandleUsers()
        {
            var familyRoomUsers = ActiveUsers.Where(s => s.Room == RoomName.Family).Select(s => s.Name).ToList();
            var friendRoomUsers = ActiveUsers.Where(s => s.Room == RoomName.Friend).Select(s => s.Name).ToList();

            Clients.All.HandleUsersCount(friendRoomUsers.Count, familyRoomUsers.Count);

            Clients.Group(RoomName.Family.ToString()).HandleActiveUsers(familyRoomUsers);
            Clients.Group(RoomName.Friend.ToString()).HandleActiveUsers(friendRoomUsers);
        }

        public async Task JoinRoom(RoomName room, string userName)
        {
            ActiveUsers.Add(new UserProfile
            {
                ConnectionId = Context.ConnectionId,
                Name = userName,
                Room = room
            });

            await Groups.Add(Context.ConnectionId, room.ToString());

            HandleUsers();
        }

        public async Task LeaveRoom(string roomName)
        {
            await Groups.Remove(Context.ConnectionId, roomName);

            var user = ActiveUsers.Where(s => s.ConnectionId == Context.ConnectionId).First();
            ActiveUsers.Remove(user);

            HandleUsers();
        }

        public void Send(string room, string name, string message)
        {
            Clients.Group(room).sendMessage(name, message);
        }

        public override Task OnConnected()
        {
            return base.OnConnected();
        }

        public override async Task OnDisconnected(bool stopCalled)
        {
            var user = ActiveUsers.Where(s => s.ConnectionId == Context.ConnectionId).First();
            ActiveUsers.Remove(user);
            HandleUsers();

            await base.OnDisconnected(stopCalled);
        }
    }
}