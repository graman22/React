import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter, Switch, Route,Link} from 'react-router-dom';



class Home extends React.Component {
   render() {
      return (
	  
	  <html>

    <head>
        <style>
           
        </style>

    </head>

    <body background-color="#4585652">
        <p>&nbsp;</p>
        
        <p><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></p>
        <table styles="width: 330px; height: 207px;" border="0" align="center">
            <tbody>
                <tr>
                    <td  styles="width: 320.8px; text-align: center;">
						<Link to="/UserInfo/AdminUser">
							<button className="button button1">Admin Interface</button>
						</Link> 
                    <br />
						<Link to="/UserInfo/NormalUser">
							<button className="button button1">User Interface</button> 
						</Link>
					</td>
                </tr>
            </tbody>
        </table>
    </body>

</html>
	  
	  
	  
	  
	  
	  
		
      )
   }
}
export default Home;

/*
<div>
            <ul>            
			     <li><Link to="/UserInfo/AdminUser"><button>Admin</button></Link></li>
                <li><Link to="/UserInfo/NormalUser"><button>User</button></Link></li>            
            </ul>
            
         </div>
		 
		 */

