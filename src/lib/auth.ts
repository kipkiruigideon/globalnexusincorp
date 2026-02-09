// Simple authentication utilities using localStorage
// In production, replace with proper backend authentication

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  username?: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country?: string;
  accountType: string;
  employmentStatus: string;
  annualIncome: string;
  createdAt: string;
  balance: number;
  accountNumber: string;
}

export interface AuthUser {
  email: string;
  passwordHash: string;
  userData: User;
}

// Simple hash function for demo purposes
// In production, use bcrypt on the server side
function simpleHash(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(36) + str.length.toString(36);
}

// Generate a unique account number
function generateAccountNumber(): string {
  const prefix = '4521'; // Global Nexus prefix
  const random = Math.floor(Math.random() * 10000000000).toString().padStart(10, '0');
  return prefix + random;
}

// Generate unique user ID
function generateUserId(): string {
  return 'user_' + Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Get all users from localStorage
export function getUsers(): AuthUser[] {
  if (typeof window === 'undefined') return [];
  const users = localStorage.getItem('gni_users');
  return users ? JSON.parse(users) : [];
}

// Save users to localStorage
function saveUsers(users: AuthUser[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('gni_users', JSON.stringify(users));
}

// Register a new user
export function registerUser(data: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  username?: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country?: string;
  accountType: string;
  employmentStatus: string;
  annualIncome: string;
}): { success: boolean; message: string; user?: User } {
  const users = getUsers();
  
  // Check if email already exists
  if (users.some(u => u.email.toLowerCase() === data.email.toLowerCase())) {
    return { success: false, message: 'An account with this email already exists' };
  }

  // Check if username already exists (if provided)
  if (data.username && users.some(u => u.userData.username?.toLowerCase() === data.username?.toLowerCase())) {
    return { success: false, message: 'This username is already taken' };
  }
  
  // Create user object
  const user: User = {
    id: generateUserId(),
    email: data.email,
    firstName: data.firstName,
    lastName: data.lastName,
    middleName: data.middleName,
    username: data.username,
    phone: data.phone,
    address: data.address,
    city: data.city,
    state: data.state,
    zipCode: data.zipCode,
    country: data.country,
    accountType: data.accountType,
    employmentStatus: data.employmentStatus,
    annualIncome: data.annualIncome,
    createdAt: new Date().toISOString(),
    balance: 0,
    accountNumber: generateAccountNumber(),
  };
  
  // Create auth user with hashed password
  const authUser: AuthUser = {
    email: data.email,
    passwordHash: simpleHash(data.password),
    userData: user,
  };
  
  // Save to users array
  users.push(authUser);
  saveUsers(users);
  
  return { success: true, message: 'Account created successfully', user };
}

// Login user
export function loginUser(email: string, password: string): { success: boolean; message: string; user?: User } {
  const users = getUsers();
  
  const authUser = users.find(u => u.email.toLowerCase() === email.toLowerCase());
  
  if (!authUser) {
    return { success: false, message: 'No account found with this email' };
  }
  
  if (authUser.passwordHash !== simpleHash(password)) {
    return { success: false, message: 'Incorrect password' };
  }
  
  // Store current user session
  if (typeof window !== 'undefined') {
    localStorage.setItem('gni_current_user', JSON.stringify(authUser.userData));
  }
  
  return { success: true, message: 'Login successful', user: authUser.userData };
}

// Get current logged in user
export function getCurrentUser(): User | null {
  if (typeof window === 'undefined') return null;
  const user = localStorage.getItem('gni_current_user');
  return user ? JSON.parse(user) : null;
}

// Update current user data
export function updateCurrentUser(userData: Partial<User>): User | null {
  if (typeof window === 'undefined') return null;
  
  const currentUser = getCurrentUser();
  if (!currentUser) return null;
  
  const updatedUser = { ...currentUser, ...userData };
  localStorage.setItem('gni_current_user', JSON.stringify(updatedUser));
  
  // Also update in users array
  const users = getUsers();
  const index = users.findIndex(u => u.email === currentUser.email);
  if (index !== -1) {
    users[index].userData = updatedUser;
    saveUsers(users);
  }
  
  return updatedUser;
}

// Logout user
export function logoutUser(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('gni_current_user');
}

// Check if user is authenticated
export function isAuthenticated(): boolean {
  return getCurrentUser() !== null;
}
