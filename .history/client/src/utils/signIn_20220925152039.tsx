

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

  const signUp = async (email: string, password: string) => {
    setLoading(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("User Created Successfully!");
      })
      .then(() =>signIn(email, password))
      .catch((err) => {
        setError(err)})
      .finally(() => setLoading(false));
  };

  const logOut = async () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser(null);
        sessionStorage.removeItem('user');
        router.replace('/register')
        setLoading(false);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };
