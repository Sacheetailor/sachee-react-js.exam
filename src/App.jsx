import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import RecipeList from './pages/RecipeList';
import RecipeDetails from './pages/RecipeDetails';
import RecipeForm from './pages/RecipeForm';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>

      <NavigationBar />

      <div className="container my-4">

        <Routes>

          <Route path="/" element={<RecipeList />} />

          <Route path="/recipe/:id" element={<RecipeDetails />} />

          <Route path="/login" element={<Login />} />

          <Route
            path="/add-recipe"
            element={
              <ProtectedRoute>
                <RecipeForm />
              </ProtectedRoute>
            }
          />

          <Route
            path="/edit-recipe/:id"
            element={
              <ProtectedRoute>
                <RecipeForm />
              </ProtectedRoute>
            }
          />

        </Routes>

      </div>

    </Router>
  );
}

export default App;