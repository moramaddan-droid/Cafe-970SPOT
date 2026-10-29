package com.example

import android.annotation.SuppressLint
import android.content.Context
import android.content.Intent
import android.graphics.Bitmap
import android.net.Uri
import android.os.Bundle
import android.view.ViewGroup
import android.webkit.WebChromeClient
import android.webkit.WebResourceRequest
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.Toast
import androidx.activity.ComponentActivity
import androidx.activity.compose.BackHandler
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.animation.AnimatedVisibility
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.LinearProgressIndicator
import androidx.compose.material3.Scaffold
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.viewinterop.AndroidView
import com.example.ui.theme.DarkBackground
import com.example.ui.theme.DarkCard
import com.example.ui.theme.GoldAccent
import com.example.ui.theme.GoldLight
import com.example.ui.theme.MyApplicationTheme

class MainActivity : ComponentActivity() {
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    enableEdgeToEdge()
    setContent {
      MyApplicationTheme {
        WebsiteViewerScreen()
      }
    }
  }
}

@SuppressLint("SetJavaScriptEnabled")
@Composable
fun WebsiteViewerScreen() {
  val context = LocalContext.current
  var webViewInstance by remember { mutableStateOf<WebView?>(null) }
  var canGoBack by remember { mutableStateOf(false) }
  var loadProgress by remember { mutableIntStateOf(0) }
  var isLoading by remember { mutableStateOf(true) }

  BackHandler(enabled = canGoBack) {
    webViewInstance?.goBack()
  }

  Scaffold(
    modifier = Modifier
      .fillMaxSize()
      .testTag("website_screen"),
    containerColor = DarkBackground
  ) { innerPadding ->
    Box(
      modifier = Modifier
        .fillMaxSize()
        .padding(innerPadding)
        .background(DarkBackground)
    ) {
      AndroidView(
        modifier = Modifier
          .fillMaxSize()
          .testTag("website_webview"),
        factory = { ctx ->
          WebView(ctx).apply {
            layoutParams = ViewGroup.LayoutParams(
              ViewGroup.LayoutParams.MATCH_PARENT,
              ViewGroup.LayoutParams.MATCH_PARENT
            )
            settings.apply {
              javaScriptEnabled = true
              domStorageEnabled = true
              loadWithOverviewMode = true
              useWideViewPort = true
              builtInZoomControls = true
              displayZoomControls = false
              allowFileAccess = true
              allowContentAccess = true
              cacheMode = WebSettings.LOAD_DEFAULT
            }

            webChromeClient = object : WebChromeClient() {
              override fun onProgressChanged(view: WebView?, newProgress: Int) {
                loadProgress = newProgress
                isLoading = newProgress < 100
              }
            }

            webViewClient = object : WebViewClient() {
              override fun onPageStarted(view: WebView?, url: String?, favicon: Bitmap?) {
                isLoading = true
                canGoBack = view?.canGoBack() ?: false
              }

              override fun onPageFinished(view: WebView?, url: String?) {
                isLoading = false
                canGoBack = view?.canGoBack() ?: false
              }

              override fun shouldOverrideUrlLoading(
                view: WebView?,
                request: WebResourceRequest?
              ): Boolean {
                val url = request?.url?.toString() ?: return false
                return handleCustomSchemes(ctx, url)
              }
            }

            loadUrl("file:///android_asset/website/index.html")
            webViewInstance = this
          }
        },
        update = {
          webViewInstance = it
        }
      )

      AnimatedVisibility(
        visible = isLoading,
        modifier = Modifier.align(Alignment.TopCenter)
      ) {
        LinearProgressIndicator(
          progress = { loadProgress / 100f },
          modifier = Modifier
            .fillMaxWidth()
            .height(2.dp),
          color = GoldAccent,
          trackColor = Color.Transparent
        )
      }
    }
  }
}

private fun handleCustomSchemes(context: Context, url: String): Boolean {
  return try {
    if (url.startsWith("tel:") || url.startsWith("mailto:") ||
      url.startsWith("whatsapp:") || url.startsWith("geo:") ||
      url.contains("wa.me") || url.contains("whatsapp.com") ||
      url.contains("maps.google.com") || url.contains("google.com/maps") ||
      url.contains("instagram.com") || url.contains("tiktok.com") ||
      url.contains("facebook.com")
    ) {
      val intent = Intent(Intent.ACTION_VIEW, Uri.parse(url)).apply {
        flags = Intent.FLAG_ACTIVITY_NEW_TASK
      }
      context.startActivity(intent)
      true
    } else {
      false
    }
  } catch (e: Exception) {
    Toast.makeText(context, "جارٍ فتح الرابط...", Toast.LENGTH_SHORT).show()
    false
  }
}
