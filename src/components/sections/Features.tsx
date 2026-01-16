import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Zap, Shield, Smartphone, Settings } from 'lucide-react'

interface Feature {
  title: string
  description: string
  icon: React.ReactNode
}

const defaultFeatures: Feature[] = [
  {
    title: 'Lightning Fast',
    description: 'Built with performance in mind. Your website loads quickly on any device.',
    icon: <Zap className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with automatic updates and monitoring.',
    icon: <Shield className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Mobile First',
    description: 'Responsive design that looks great on phones, tablets, and desktops.',
    icon: <Smartphone className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Easy to Manage',
    description: 'Simple admin panel to update content, add blog posts, and manage media.',
    icon: <Settings className="h-10 w-10 text-primary" />,
  },
]

interface FeaturesProps {
  title?: string
  subtitle?: string
  features?: Feature[]
}

export function Features({
  title = 'Everything You Need',
  subtitle = 'Our websites come packed with features to help your business succeed online.',
  features = defaultFeatures,
}: FeaturesProps) {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="bg-background border-0 shadow-md">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
