import Link from 'next/link';


export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-arteng-dark">Sign Up</h2>
          <p className="mt-2 text-gray-600">Create your ArtEng account</p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                id="first-name"
                name="first-name"
                type="text"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-arteng-dark focus:border-arteng-dark focus:z-10 sm:text-sm"
                placeholder="First Name"
              />
            </div>
            
            <div>
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                id="last-name"
                name="last-name"
                type="text"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-arteng-dark focus:border-arteng-dark focus:z-10 sm:text-sm"
                placeholder="Last Name"
              />
            </div>
            
            <div>
              <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-arteng-dark focus:border-arteng-dark focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            
            {/* <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-arteng-dark focus:border-arteng-dark focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div> */}
            
            <div>
              <label htmlFor="account-type" className="block text-sm font-medium text-gray-700 mb-1">
                I want to be a...
              </label>
              <select
                id="account-type"
                name="account-type"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-arteng-dark focus:border-arteng-dark focus:z-10 sm:text-sm"
              >
                <option value="" disabled selected>Select your role</option>
                <option value="member">Member</option>
                <option value="partner">Partner</option>
              </select>
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 text-arteng-dark focus:ring-arteng-dark border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              I agree to the <a href="#" className="font-medium text-arteng-dark hover:text-opacity-90">Terms of Service</a> and <a href="#" className="font-medium text-arteng-dark hover:text-opacity-90">Privacy Policy</a>
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-arteng-dark hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-arteng-dark"
            >
              Sign Up
            </button>
          </div>
        </form>
        
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="#" className="font-medium text-arteng-dark hover:text-opacity-90">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}