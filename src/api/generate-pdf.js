import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { command, args } = req.body;
    const cmd = `${command} ${args.join(' ')}`;
    
    await execAsync(cmd, { cwd: process.cwd() });
    
    res.status(200).json({ message: 'PDF generated successfully' });
  } catch (error) {
    console.error('Error generating PDF:', error);
    res.status(500).json({ message: 'Failed to generate PDF', error: error.message });
  }
}
