function superbowlWin(obj){
    
    const findW = obj.find(objct => objct.result === 'W')
    return !!findW ? findW.year : undefined
}