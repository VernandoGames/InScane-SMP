# Land Ownership

In this server, we have a system for securing plots of land. After securing land, you can whitelist certain people to be able to have full priveleges on this land.
*Note: you can not change specific permissions, but rather choose whether a user has full permission or no permission. All or nothing*

**You may not claim public domain or land you are not actively building onto. Admins can take away your land at any point if you fail to comply with this.**

## How do you claim land?
In order to claim a plot of land, you must obtain a golden shovel. Once you have this, right-click one corner of your land (or whatever key you use to place blocks) and do the same on the corner diagonal to it.  
Before claiming a plot of land, you must have enough blocks available for ownership. To check how many blocks you currently have available, run the command ``/claimslist``. The blocks are a direct measure of the *area* you can claim. So, if you want to claim a 5x4 block plot of land, you must have 20 blocks available.

## Commands
### **Claim**
*Claiming* a plot of land allows you to protect this land and whitelist certain people to have access to it.  
*Note: this does not prevent people from entering this land, just interacting with storage and breaking/placing objects*  
**Usage**: ``/claim``  
**Aliases**: ``unknown``  

### **Unclaim**
*Unclaiming* land removes your ownership from this plot of land.  
**Usage**: ``/unclaim``  
**Aliases**: ``unknown``  

### Trust
Setting a user as *trusted* allows them to bypass the limitations applied to normal users on your land. Meaning, they can access all of your storage as well as place/destroy blocks.  
**Usage**: ``/trust <user>``


### Untrust
Running this command removes a user's *trusted** permissions, meaning they can no longer access any of your storage or place/destroy blocks on your land.  
**Usage**: ``/untrust <user>``