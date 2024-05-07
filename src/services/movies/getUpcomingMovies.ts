import httpInstance from '../httpInstance';

const getUpcoming = async() =>{
    let res: any;
    const endpoint = `upcoming?api_key=${process.env.REACT_APP_MDB_API_KEY}&language=en-US`
    await httpInstance.get(endpoint).then((data) =>{
        res = data;
    }).catch((err) =>{
        res = err.response;
    });
    return res;
}

export default getUpcoming;