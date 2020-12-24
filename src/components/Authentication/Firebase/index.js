import { AuthContext, AuthProvider, withFirebase } from './Context';
import Firebase, { authentication, firestore } from './Firebase';

export default Firebase;

export { AuthContext, AuthProvider, withFirebase, authentication, firestore };
