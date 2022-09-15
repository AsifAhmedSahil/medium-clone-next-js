import { async } from "@firebase/util";
import { collection, getDocs ,setDoc,doc} from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db } from "../firebase";

const MediumContext = createContext()

const MediumProvider = ({children}) =>{

    const [users , setUsers] = useState([])
    const [posts , setPosts] = useState([])

    useEffect(() =>{
        const getUsers  =async ()=>{
            const querySnapshot = await getDocs(collection(db,'users'))
    
            setUsers(querySnapshot.docs.map(doc => {
                return {
                    id:doc.id,
                    data:{
                        ...doc.data()
                    }
                }
            }))
        }
        getUsers()
    },[])

    useEffect(() =>{
        const getPosts = async () =>{
                const querySnapshot = await getDocs(collection(db,'articles'))

                setPosts(querySnapshot.docs.map(doc => {
                    return{
                        id:doc.id,
                        data:{
                            body: doc.data().body,
                            breif: doc.data().breif,
                            category: doc.data().category,
                            postlength: doc.data().postlength,
                            title: doc.data().title,
                            postOn: doc.data().postOn,
                            postOn: doc.data().postOn,
                            author: doc.data().author,
                            bannerimage: doc.data().bannerimage
                        }
                    }
                }))
        }

        getPosts()
    },[])

    return(
        <MediumContext.Provider
        value={{posts , users}}
        >{children}

        </MediumContext.Provider>
    )

}



export {MediumContext ,MediumProvider}