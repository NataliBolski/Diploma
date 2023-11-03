import { getDocs, addDoc, doc, collection, deleteDoc } from 'firebase/firestore'
import { db, storage } from '@/firebase'
import { getStorage, uploadBytes, getDownloadURL } from 'firebase/storage'
import { ref, computed } from 'vue'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { useUser } from './useUser'
import * as firebase from 'firebase/storage'
import {createId} from '../utils/index'

export const useContent = () => {
  const content = ref()
  const contentList = ref([])
  const newContent = ref({
    id: createId(),
    image: null,
    author: '',
    name: '',
    price: '',
    year: '',
    genre: '',
    description: '',
  })


  const loading = ref({
    content: false,
    contentList: false,
    newContent: false
  })


  const { userToObject, user, updateUserInDatabase } = useUser()

  async function getAllContent() {
    loading.value.contentList = true
    contentList.value.length = 0;
    try {
      const querySnapshot = await getDocs(collection(db, 'contents'))
      querySnapshot.forEach((doc) => {
        const compressive = {
          firebaseId: doc.id,
          ...doc.data()
        }
        contentList.value.push(compressive)
      })
      loading.value.contentList = false
    } catch (error) {
      console.error(error)
    }
  }

  async function getContentById(id) {
    loading.value.content = true
    try {
      const querySnapshot = await getDocs(collection(db, 'contents'))
      content.value = querySnapshot.docs
        .map((doc) => doc.data())
        .find((item) => item.id === id)
      loading.value.content = false
    } catch (error) {
      console.error(error)
    }
  }

  async function addContent() {
    loading.value.newContent = true
  
    try {
      console.log(newContent)
      console.log(userToObject.value)
      if (newContent.value && userToObject.value) {
        newContent.value.author = userToObject.value
        const res = await addDoc(collection(db, 'contents'), newContent.value)
        return res;
        // loading.value.newContent = false
      }
    } catch (error) {
      console.error(error)
    }
  }


  async function deleteDocById(firebaseId) {
    loading.value.content = true
    try {
      await deleteDoc(doc(db, 'content', firebaseId))
      loading.value.content = false
    } catch (error) {
      console.error(error)
    }
  }

  async function addGameToBucket(id,content) {
    if (user.value) {
      user.value.bucket = new Set(user.value.bucket)
      user.value.bucket.add(content.id) // исправлено здесь
      user.value.bucket = Array.from(user.value.bucket) || [user.value.bucket] // исправлено здесь
      console.log(user.value.bucket);
      await updateUserInDatabase()
      return
    }
    return
  }

  async function uploadImage(file) {
    console.log(file)
    const storage = getStorage()
    console.log(storage)
    const storageRef = firebase.ref(storage, 'contens/' + file.name)
    console.log(storageRef)

    uploadBytes(storageRef, file)
      .then(() => {
        console.log('Файл успешно загружен!')
        firebase
        .getDownloadURL(storageRef)
          .then((downloadURL) => {
            newContent.value.image = downloadURL
          })
          .catch((error) => {
            console.error('Ошибка получения ссылки на загруженный файл:', error)
          })
      })
      .catch((error) => {
        console.error('Ошибка загрузки файла:', error)
      })
      
  }
  

  return {
    uploadImage,
    content,
    contentList,
    loading,
    newContent,
    getAllContent,
    getContentById,
    addContent,
    addGameToBucket,
    deleteDocById, 

  }
}