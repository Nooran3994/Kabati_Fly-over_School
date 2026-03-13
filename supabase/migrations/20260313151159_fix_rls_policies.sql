/*
  # Fix RLS policies to enforce row-level security

  1. Changes
    - Remove insecure policies that allow all authenticated users to modify data
    - Add new policies that only allow admins (via app_metadata) to manage content
    - Keep public read access for the website

  2. Security Improvements
    - DELETE operations now require admin role
    - INSERT operations now require admin role
    - UPDATE operations now require admin role
    - Public users can only read content (SELECT is unrestricted)
    - Admin users identified via app_metadata.role = 'admin'
*/

DROP POLICY IF EXISTS "Authenticated users can insert achievements" ON achievements;
DROP POLICY IF EXISTS "Authenticated users can update achievements" ON achievements;
DROP POLICY IF EXISTS "Authenticated users can delete achievements" ON achievements;

DROP POLICY IF EXISTS "Authenticated users can insert news" ON news;
DROP POLICY IF EXISTS "Authenticated users can update news" ON news;
DROP POLICY IF EXISTS "Authenticated users can delete news" ON news;

CREATE POLICY "Admin can insert achievements"
  ON achievements FOR INSERT
  TO authenticated
  WITH CHECK (
    (SELECT auth.jwt()->>'app_metadata')::jsonb->>'role' = 'admin'
  );

CREATE POLICY "Admin can update achievements"
  ON achievements FOR UPDATE
  TO authenticated
  USING (
    (SELECT auth.jwt()->>'app_metadata')::jsonb->>'role' = 'admin'
  )
  WITH CHECK (
    (SELECT auth.jwt()->>'app_metadata')::jsonb->>'role' = 'admin'
  );

CREATE POLICY "Admin can delete achievements"
  ON achievements FOR DELETE
  TO authenticated
  USING (
    (SELECT auth.jwt()->>'app_metadata')::jsonb->>'role' = 'admin'
  );

CREATE POLICY "Admin can insert news"
  ON news FOR INSERT
  TO authenticated
  WITH CHECK (
    (SELECT auth.jwt()->>'app_metadata')::jsonb->>'role' = 'admin'
  );

CREATE POLICY "Admin can update news"
  ON news FOR UPDATE
  TO authenticated
  USING (
    (SELECT auth.jwt()->>'app_metadata')::jsonb->>'role' = 'admin'
  )
  WITH CHECK (
    (SELECT auth.jwt()->>'app_metadata')::jsonb->>'role' = 'admin'
  );

CREATE POLICY "Admin can delete news"
  ON news FOR DELETE
  TO authenticated
  USING (
    (SELECT auth.jwt()->>'app_metadata')::jsonb->>'role' = 'admin'
  );