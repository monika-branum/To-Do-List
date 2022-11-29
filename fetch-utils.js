const SUPABASE_URL = 'https://vmhclpevfecxhpxwubhs.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtaGNscGV2ZmVjeGhweHd1YmhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTI5Nzk4MzgsImV4cCI6MTk2ODU1NTgzOH0.pWvGlCrbKNRZWBKDRsPR8rGxu8nodj7nq8cY1rPNglI';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function createTodo(todos) {
    const response = await client
        .from('todos')
        .insert({ todo: todos, complete: false, user_id: client.auth.user().id });
    // create a single incomplete todo with the correct 'todo' property for this user in supabase
    // once you have a response from supabase, comment this back in:
    return checkError(response);
}

export async function deleteAllTodos() {
    // delete all todos for this user in supabase
    // once you have a response from supabase, comment this back in:
    // return checkError(response);
}

export async function getTodos() {
    // get all todos for this user from supabase
    // once you have a response from supabase, comment this back in:
    // return checkError(response);
}

export async function completeTodo(id) {
    // find the and update (set complete to true), the todo that matches the correct id
    // once you have a response from supabase, comment this back in:
    // return checkError(response);
}

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

export function redirectIfLoggedIn() {
    const user = getUser();
    if (user) {
        location.replace('./todos');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    window.location.replace('../');
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
