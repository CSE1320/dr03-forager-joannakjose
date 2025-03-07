import NavBar from '../../components/NavBar'

export default function PhotoSearchPage() {
  return (
    <div className="page">
      <h1>Photo Search Page</h1>
      
      {/* Image Display */}
      <img 
        src="C:/Users/joann/Downloads/PhotoSearch.png" 
        alt="Photo Search" 
        style={{ width: '100%', maxWidth: '600px', height: 'auto' }} 
      />

      <NavBar />
    </div>
  );
}
