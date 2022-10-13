

const signIn = async (email: string, password: string) => {
    setLoading(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        sessionStorage.setItem('user', JSON.stringify(userCredential.user));
        router.replace("/browse");
      })
      .then(() => {
        setLoading(false)
        })
      .catch((err) => alert(err))
      .finally(() => setLoading(false));
  };

  export default sing