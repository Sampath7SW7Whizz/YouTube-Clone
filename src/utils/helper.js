var nameList = [
  'Amitabh', 'Shahrukh', 'Deepika', 'Ranveer',
  'Priyanka', 'Aishwarya', 'Salman', 'Aamir', 'Kareena', 'Akshay',
  'Ranbir', 'Alia', 'Katrina', 'Rajinikanth', 'Vijay', 'Kamal', 'Sridevi',
  'Hrithik', 'Amitabh', 'Farhan', 'Anushka', 'Rohit', 'Irrfan', 'Shahid',
  'Vidya', 'Sonam', 'Ranveer', 'Sonakshi', 'Shilpa', 'Madhuri', 'Shahrukh',
  'Kajol', 'Karan', 'Saif', 'Karisma', 'Varun', 'Parineeti', 'Ayushmann', 'Taapsee',
  'Kangana', 'Sonu', 'Deepika', 'John', 'Rajkummar', 'Diljit', 'Anil', 'Sunny', 'Nawazuddin',
  'Ileana', 'Dharmendra', 'Juhi', 'Tabu', 'Bhumi', 'Yami', 'Amitabh', 'Rishi', 'Juhi', 'Divya',
  'Bobby', 'Preity', 'Govinda', 'Neha', 'Mithun', 'Sharmila', 'Arjun', 'Sushmita', 'Sushant', 'Kriti',
  'Anupam', 'Madhubala', 'Vidya', 'Nargis', 'Gulzar', 'Rekha', 'Zeenat', 'Amrish', 'Nana', 'Ranvir',
  'Ranveer', 'Ishaan', 'Ananya', 'Malaika', 'Jacqueline', 'Virat', 'Anushka', 'Shreyas', 'Raveena', 'Javed',
  'Gulshan', 'Ranveer', 'Rajkummar', 'Dia', 'Lata', 'Sunil', 'Nora', 'Tiger', 'Shradha', 'Kriti',
  'Ayushman', 'Sanya', 'Rajkummar', 'Pankaj', 'Diljit', 'Mouni', 'Vicky', 'Karan', 'Rhea', 'Kiara',
  'Rahul', 'Malaika', 'Rajkummar', 'Manoj', 'Abhishek', 'Sanjay', 'Akshay', 'Twinkle', 'Kunal', 'Soha',
  'Ishaan', 'Tara', 'Ananya', 'Kartik', 'Bhumi', 'Amitabh', 'Jaya', 'Aishwarya', 'Abhishek', 'Kajol'
];

  export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
};

export function makeRandomMessage(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}