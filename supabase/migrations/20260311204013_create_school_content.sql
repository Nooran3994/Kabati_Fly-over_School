/*
  # Create school website content tables

  1. New Tables
    - `achievements`
      - `id` (uuid, primary key)
      - `title` (text) - Achievement title
      - `description` (text) - Achievement description
      - `year` (integer) - Year of achievement
      - `created_at` (timestamptz) - Record creation timestamp
    
    - `news`
      - `id` (uuid, primary key)
      - `title` (text) - News title
      - `content` (text) - News content
      - `published_date` (date) - Publication date
      - `created_at` (timestamptz) - Record creation timestamp
  
  2. Security
    - Enable RLS on both tables
    - Add policies for public read access (website content is public)
    - Only authenticated users can manage content

  3. Sample Data
    - Insert some initial achievements to showcase the school
*/

CREATE TABLE IF NOT EXISTS achievements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  year integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS news (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  published_date date DEFAULT CURRENT_DATE,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE news ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view achievements"
  ON achievements FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert achievements"
  ON achievements FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update achievements"
  ON achievements FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete achievements"
  ON achievements FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "Anyone can view news"
  ON news FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert news"
  ON news FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update news"
  ON news FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete news"
  ON news FOR DELETE
  TO authenticated
  USING (true);

INSERT INTO achievements (title, description, year) VALUES
  ('Top Performer in County Music Festival', 'Our school choir won first place in the Murang''a County Music Festival, showcasing exceptional talent and dedication.', 2024),
  ('100% KCPE Transition Rate', 'All our Class 8 students successfully transitioned to secondary schools, demonstrating our commitment to quality education.', 2023),
  ('Best Kept School Compound Award', 'Recognized by the Ministry of Education for maintaining the cleanest and most organized school environment in the region.', 2023),
  ('Science Congress Winners', 'Our students won multiple awards at the Regional Science Congress for innovative projects in environmental conservation.', 2024);

INSERT INTO news (title, content, published_date) VALUES
  ('Welcome to New Academic Year 2025', 'We are excited to welcome all students and parents to the new academic year. Classes begin on January 6th, 2025. We look forward to another year of academic excellence and character development.', '2025-01-02'),
  ('Sports Day Celebration', 'Join us for our annual Sports Day on March 15th, 2025. Students will participate in various athletic activities, fostering teamwork and physical fitness.', '2025-02-20'),
  ('Parent-Teacher Meeting Scheduled', 'Our next parent-teacher meeting is scheduled for April 5th, 2025. We encourage all parents to attend and discuss their children''s progress.', '2025-03-10');