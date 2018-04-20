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
    },
    {
      id:4,
      name:'sluchawka',
      username:'helpdesk',
      avatar:'http://quickstartaz.com/wp-content/uploads/2017/10/QSrep.png'
    },
    {
      id:5,
      name:'yellowhair',
      username:'yellowhair',
      avatar:'http://www.hexatar.com/gallery/thumb/151208_020651_fe104ea6634.png'
    },
    {
      id:6,
      name:'tallgace',
      username:'tallgace',
      avatar:'http://www.hexatar.com/gallery/thumb/151123_082230_m9143e227c9.png'
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