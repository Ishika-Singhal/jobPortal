'use server'

//create profile action
export async function createProfile(data) {
    
}
export async function createProfile(data) {
    try {
        // Validate input data
        if (!data) {
            throw new Error('Invalid input data');
        }

        // Create a new profile
        const profile = await fetch('/api/profiles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        // Check if the profile was created successfully
        if (!profile.ok) {
            throw new Error('Failed to create profile');
        }

        // Return the created profile
        return await profile.json();
    } catch (error) {
        // Log the error and rethrow it
        console.error('Error creating profile:', error);
        throw error;
    }
}