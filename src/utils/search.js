function ishistoryinfo(value,local,searchthis) {
    const historylist = JSON.parse(localStorage.getItem(local))
        if(historylist && historylist.length){
          const flag = historylist.indexOf(value)
          if(flag==-1){
             // console.log('QQQ')  
             const searchlist=searchthis.state.historylist
             searchlist.unshift(value)
             searchthis.setState({
                historylist:searchlist
             })
            }else{
             const searchlist=searchthis.state.historylist
             searchlist.splice(flag,1)
             searchlist.unshift(value)
             searchthis.setState({
                historylist:searchlist
             })
         }
        }else{
            const searchlist=[value]
            searchthis.setState({
                historylist:searchlist
            })
        }
    localStorage.setItem(local,JSON.stringify(searchthis.state.historylist))
}

export { ishistoryinfo }