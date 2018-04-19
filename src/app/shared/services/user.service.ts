import { Injectable } from '@angular/core'
import { User } from '../models/user'
const usersPromise: Promise<User[]> = Promise.resolve([
    {
      id:1,
      name:'Redbeard',
      username:'redbeard',
      avatar: 'https://cdn1.vectorstock.com/i/thumb-large/32/18/user-sign-icon-person-symbol-human-avatar-vector-12693218.jpg'
    },
    {
      id:2,
      name:'Eyeglass',
      username:'eyeglass',
      avatar: 'https://comps.canstockphoto.com/user-sign-icon-person-symbol-human-image_csp43862278.jpg'
    },
    {
      id:3,
      name:'bluetie',
      username:'bluetie',
      avatar:'https://thumbs.dreamstime.com/b/user-sign-icon-person-symbol-human-avatar-old-rich-man-84519309.jpg'
    }
  ]);

@Injectable()    
export class UserService{
   
        getUsers(){
            return usersPromise;
        }
        getUser(username){
            return usersPromise.then(users => users.find(user => user.username === username));
            // let user = usersPromise.then(users =>{
            //     return user.username === username;
            // })
            // return user;
        }

}