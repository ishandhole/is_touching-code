function is_Touching(movingobject, fixedobject){
    if (movingobject.x - fixedobject.x < fixedobject.width/2 + movingobject.width/2
      && fixedobject.x - movingobject.x < fixedobject.width/2 + movingobject.width/2
      && movingobject.y - fixedobject.y < fixedobject.height/2 + movingobject.height/2
      && fixedobject.y - movingobject.y < fixedobject.height/2 + movingobject.height/2)
       
      {
        return true;
  }
  else{
    return false;
  }
}